import { Clock, Users, Copy, Edit, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ExamCardProps {
  title: string;
  description?: string;
  questionCount: number;
  duration: number;
  studentCount: number;
  examLink: string;
  onEdit: () => void;
  onViewResults: () => void;
}

const ExamCard = ({
  title,
  description,
  questionCount,
  duration,
  studentCount,
  examLink,
  onEdit,
  onViewResults
}: ExamCardProps) => {

  const copyLink = async () => {
  
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {duration}m
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {studentCount}
          </Badge>
          <Badge variant="outline">
            {questionCount} questions
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-2">
        <Button
          variant="outline"
          size="sm"
          onClick={copyLink}
          className="w-full flex items-center justify-center gap-2"
        >
          <Copy className="h-4 w-4" />
          Copy Exam Link
        </Button>
        
        <div className="flex w-full space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onEdit}
            className="flex-1 flex items-center justify-center gap-1"
          >
            <Edit className="h-3 w-3" />
            Edit
          </Button>
          <Button
            size="sm"
            onClick={onViewResults}
            className="flex-1 flex items-center justify-center gap-1"
          >
            <BarChart3 className="h-3 w-3" />
            Results
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
