import { GraduationCap, User, Plus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  isTeacher?: boolean;
  onCreateExam?: () => void;
}

const Header = ({ isTeacher, onCreateExam }: HeaderProps) => {


    const user = {
        name: 'John Doe',
        email : 'john@mail.com'
    }
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ExamMaster
            </h1>
          </div>
          
          {isTeacher && user && (
            <div className="flex items-center space-x-4">
              <Button
                onClick={onCreateExam}
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Create Exam</span>
              </Button>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {user.name?.charAt(0)?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-700 hidden sm:inline">{user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
