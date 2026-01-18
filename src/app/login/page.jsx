import LoginForm from '@/components/LoginPage/LoginForm';
import LoginHeader from '@/components/LoginPage/LoginHeader';
import React from 'react';

const page = () => {
    return (
        <main className="min-h-screen relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-green-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                
                {/* 1. Header Section */}
                <div className="mb-10 animate-fade-in-down">
                    <LoginHeader />
                </div>

                {/* 2. Form Section */}
                <div className="relative z-10 animate-fade-in-up">
                    <LoginForm />
                </div>

            </div>

            <div className="fixed inset-0 opacity-[0.015] pointer-events-none -z-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        </main>
    );
};

export default page;