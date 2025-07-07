
import { Clock, Users, Link as LinkIcon } from 'lucide-react';

interface ExamCardProps {
  title: string;
  description?: string;
  questionCount: number;
  duration: number;
  studentCount: number;
  examLink: string;
}

const ExamCard = ({
  title,
  description,
  questionCount,
  duration,
  studentCount,
  examLink,
}: ExamCardProps) => {

  const copyLink = async () => {
    console.log("Copying link:", examLink);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            {description && (
              <p className="text-gray-600 text-sm mb-3">{description}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{studentCount} students</span>
          </div>
          <span>•</span>
          <span>{questionCount} questions</span>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={copyLink}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <LinkIcon className="h-4 w-4" />
            <span>Copy Link</span>
          </button>
          
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Edit
            </button>
            <button
              className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
