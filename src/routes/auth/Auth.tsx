import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap} from 'lucide-react';
import { Tabs,TabsList, TabsTrigger } from '@/components/ui/tabs';
import Signup from './Signup';
import Login from './Login';

const Auth = () => {

  const navigate = useNavigate();


  const user = null

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      navigate('/teacher');
    }
  }, [user, navigate]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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

        <Tabs defaultValue="login" className="w-full ">
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <Login/>
          <Signup/>

        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
