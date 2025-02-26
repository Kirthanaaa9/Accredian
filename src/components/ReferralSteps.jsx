const ReferralSteps = () => {
  return (
    <div className="bg-blue-50 py-10 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-center items-center gap-10">
  {/* First Card */}
  <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
    <div className="absolute -top-5 flex items-center justify-center">
      <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-dotted border-blue-300"><p className="text-center mt-1">1</p></div>
    </div>
    <p className="text-center mt-6">Submit referrals easily via our referral service.</p>
  </div>

  {/* Stylish Grey Curved Arrow */}
  <svg className="w-16 h-16 text-gray-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c3.5 6 10.5 6 14 0l4 4" />
  </svg>




  {/* Second Card */}
  <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
    <div className="absolute -top-5 flex items-center justify-center">
      <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-dotted border-blue-300"><p className="text-center mt-1">2</p></div>
    </div>
    <p className="text-center mt-6">Earn rewards once your referral joins our program.</p>
  </div>

  {/* Stylish Grey Curved Arrow */}
  <svg className="w-16 h-16 text-gray-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c3.5 6 10.5 6 14 0l4 4" />
  </svg>

  {/* Third Card */}
  <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
    <div className="absolute -top-5 flex items-center justify-center">
      <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-dotted border-blue-300"><p className="text-center mt-1">3</p></div>
    </div>
    <p className="text-center mt-6">Get a bonus after 30 days of program enrollment.</p>
  </div>
</div>
</div>
      </div>
    
  );
};

export default ReferralSteps;
