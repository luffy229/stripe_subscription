import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { CheckCircle, Star } from "lucide-react";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");

  const userProfile = await prisma.user.findUnique({ where: { id: user.id } });
  if (userProfile?.plan === "free") return redirect("/");

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 text-center">
      <div className="relative bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-20 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-opacity-40 bg-black backdrop-blur-md"></div>
        <h1 className="relative text-5xl md:text-6xl font-extrabold mb-6 flex justify-center items-center gap-3 z-10">
          <Star className="text-yellow-400 w-12 h-12 animate-pulse" /> Premium Access Granted!
        </h1>
        <p className="relative text-lg md:text-xl max-w-3xl mx-auto z-10">
          Welcome to the premium section! Enjoy exclusive content, priority support, and enhanced features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white dark:bg-gray-900 shadow-lg rounded-xl flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative bg-opacity-80 backdrop-blur-md"
          >
            <CheckCircle className="text-green-500 w-12 h-12 mb-4 animate-bounce" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  { title: "Priority Support", description: "Get fast and dedicated support for any issues." },
  { title: "Exclusive Content", description: "Access premium-only tutorials, tools, and features." },
  { title: "Ad-Free Experience", description: "Enjoy a seamless experience with zero ads." },
  { title: "Advanced Analytics", description: "Get in-depth insights into your activities." },
  { title: "Early Feature Access", description: "Be the first to try new updates and tools." },
  { title: "Community Perks", description: "Join an exclusive group of premium users." },
];

export default Page;
