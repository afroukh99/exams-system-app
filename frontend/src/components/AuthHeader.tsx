import { GraduationCap } from "lucide-react";

const AuthHeader = () => {
  return (
      <div className="text-center mb-8">
           <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
             <GraduationCap className="h-8 w-8 text-white" />
           </div>
           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             ExamMaster
           </h1>
           <p className="text-gray-600 mt-2">
             Create and manage online exams
           </p>
         </div>
  );
}

export default AuthHeader;