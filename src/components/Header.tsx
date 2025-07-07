import { GraduationCap, User, Plus } from 'lucide-react';

interface HeaderProps {
  isTeacher?: boolean;
  onCreateExam?: () => void;
}

const Header = ({ isTeacher, onCreateExam }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
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
          
          {isTeacher && (
            <div className="flex items-center space-x-4">
              <button
                onClick={onCreateExam}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <Plus className="h-4 w-4" />
                <span>Create Exam</span>
              </button>
              <div className="p-2 bg-gray-100 rounded-full">
                <User className="h-5 w-5 text-gray-600" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
