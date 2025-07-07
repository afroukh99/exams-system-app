import { GraduationCap, Mail, ArrowRight } from 'lucide-react';

const StudentEntry = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Mathematics Quiz - Algebra
                    </h1>
                    <p className="text-gray-600">
                        Enter your Gmail address to begin the exam
                    </p>
                </div>

                {/* Exam Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Questions:</span>
                        <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">30 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">Mixed (MCQ & Direct)</span>
                    </div>
                </div>

                {/* Entry Form */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Gmail Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="email"
                                id="email"
                                placeholder="student@gmail.com"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            Only Gmail addresses are accepted for this exam
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >

                        <>
                            <span>Start Exam</span>
                            <ArrowRight className="h-5 w-5" />
                        </>
                    </button>
                </form>

                {/* Instructions */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Important Instructions:</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Answer questions within the time limit</li>
                        <li>• You cannot go back to previous questions</li>
                        <li>• Your answers are saved automatically</li>
                        <li>• Results will be shown at the end</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentEntry;
