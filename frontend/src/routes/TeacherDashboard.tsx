import  { useState } from 'react';
import { Plus, BookOpen, Users, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Header from '../components/Header';
import ExamCard from '../components/ExamCard';

const TeacherDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for exams
  const exams = [
    {
      id: '1',
      title: 'Mathematics Quiz - Algebra',
      description: 'Basic algebra concepts and problem solving',
      questionCount: 15,
      duration: 30,
      studentCount: 12,
      examLink: `${window.location.origin}/exam/1`
    },
    {
      id: '2',
      title: 'Physics - Newton\'s Laws',
      description: 'Understanding motion and forces',
      questionCount: 20,
      duration: 45,
      studentCount: 8,
      examLink: `${window.location.origin}/exam/2`
    },
    {
      id: '3',
      title: 'History - World War II',
      description: 'Major events and timeline',
      questionCount: 25,
      duration: 60,
      studentCount: 15,
      examLink: `${window.location.origin}/exam/3`
    }
  ];

  const handleCreateExam = () => {
    
  };

  const handleEditExam = (examId: string) => {
   
  };

  const handleViewResults = (examId: string) => {
 
  };

  const filteredExams = exams.filter(exam =>
    exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalStudents = exams.reduce((sum, exam) => sum + exam.studentCount, 0);
  const totalExams = exams.length;
  const avgDuration = Math.round(exams.reduce((sum, exam) => sum + exam.duration, 0) / exams.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teacher Dashboard</h1>
          <p className="text-gray-600">Manage your exams and track student performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalExams}</div>
              <p className="text-xs text-muted-foreground">Active exams</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents}</div>
              <p className="text-xs text-muted-foreground">Participated</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgDuration}m</div>
              <p className="text-xs text-muted-foreground">Per exam</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84%</div>
              <p className="text-xs text-muted-foreground">Average score</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <CardTitle>Your Exams</CardTitle>
                <CardDescription>Manage and monitor your created exams</CardDescription>
              </div>
              <Button onClick={handleCreateExam} className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Create New Exam</span>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Search */}
            <div className="mb-6">
              <Label htmlFor="search">Search exams</Label>
              <Input
                id="search"
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1"
              />
            </div>

            <Separator className="mb-6" />

            {/* Exams Grid */}
            {filteredExams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                  <ExamCard
                    key={exam.id}
                    title={exam.title}
                    description={exam.description}
                    questionCount={exam.questionCount}
                    duration={exam.duration}
                    studentCount={exam.studentCount}
                    examLink={exam.examLink}
                    onEdit={() => handleEditExam(exam.id)}
                    onViewResults={() => handleViewResults(exam.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No exams found</h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm ? 'Try adjusting your search criteria' : 'Get started by creating your first exam'}
                </p>
                <Button onClick={handleCreateExam}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Exam
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
