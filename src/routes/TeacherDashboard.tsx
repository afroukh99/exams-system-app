
import React, { useState } from 'react';
import Header from '../components/Header';
import ExamCard from '../components/ExamCard';
import { Plus, Search } from 'lucide-react';

const TeacherDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - in real app this would come from Supabase
  const exams = [
    {
      id: '1',
      title: 'Mathematics Quiz - Algebra',
      description: 'Basic algebra concepts and problem solving',
      questionCount: 15,
      duration: 30,
      studentCount: 12,
      examLink: 'https://exammaster.app/exam/abc123'
    },
    {
      id: '2', 
      title: 'History Test - World War II',
      description: 'Major events and consequences of WWII',
      questionCount: 20,
      duration: 45,
      studentCount: 8,
      examLink: 'https://exammaster.app/exam/def456'
    },
    {
      id: '3',
      title: 'Science Assessment - Chemistry',
      description: 'Periodic table and chemical reactions',
      questionCount: 12,
      duration: 25,
      studentCount: 15,
      examLink: 'https://exammaster.app/exam/ghi789'
    }
  ];
  
  const handleCreateExam = () => {
    console.log('Create new exam clicked');
  };
  

  

  
  const filteredExams = exams.filter(exam =>
    exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Professor!
          </h1>
          <p className="text-gray-600">
            Manage your exams and track student progress
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Exams</p>
                <p className="text-2xl font-bold text-gray-900">{exams.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Students</p>
                <p className="text-2xl font-bold text-gray-900">35</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Score</p>
                <p className="text-2xl font-bold text-gray-900">87%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">+12%</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Create */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search exams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={handleCreateExam}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Plus className="h-5 w-5" />
            <span>Create New Exam</span>
          </button>
        </div>
        
        {/* Exams Grid */}
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
            />
          ))}
        </div>
        
        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 max-w-md mx-auto">
              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No exams found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery ? 'Try adjusting your search terms' : 'Create your first exam to get started'}
              </p>
              <button
                onClick={handleCreateExam}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Create Exam
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboard;