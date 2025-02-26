import { useState } from "react";

export default function ReferralPage() {
  const [enrolled, setEnrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerMobile: "",
    refereeName: "",
    refereeMobile: "",
  });

  const referralData = [
    { program: "Professional Certificate Program in Product Management", referrerBonus: "₹7,000", refereeBonus: "₹9,000" },
    { program: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹7,000", refereeBonus: "₹10,000" },
    { program: "Executive Program in Product Management", referrerBonus: "₹23,000", refereeBonus: "₹13,000" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Referrer Name:", formData.referrerName);
    console.log("Referrer Mobile:", formData.referrerMobile);
    console.log("Referee Name:", formData.refereeName);
    console.log("Referee Mobile:", formData.refereeMobile);
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-lg shadow-md p-4 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">All Programs</h2>
        <ul className="space-y-2">
          {["Product Management", "Strategy Leadership", "Business Management", "FinTech", "Data Science"].map((category, index) => (
            <li key={index} className="p-2 bg-blue-50 rounded-md cursor-pointer hover:bg-blue-100">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white rounded-lg shadow-md ml-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            What Are The <span className="text-blue-500">Referral Benefits?</span>
          </h2>
          <div className="flex items-center space-x-4">
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-left">Programs</th>
                <th className="p-3 text-left">Referrer Bonus</th>
                <th className="p-3 text-left">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {referralData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.program}</td>
                  <td className="p-3">{item.referrerBonus}</td>
                  <td className="p-3">{item.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Refer Now Button */}
        <div className="text-center mt-6">
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Refer Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              {/* Referrer Name */}
              <label className="block mb-2">
                <span className="text-gray-700">Referrer Name</span>
                <input
                  type="text"
                  required
                  value={formData.referrerName}
                  onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </label>

              {/* Referrer Mobile */}
              <label className="block mb-2">
                <span className="text-gray-700">Referrer Mobile</span>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  value={formData.referrerMobile}
                  onChange={(e) => setFormData({ ...formData, referrerMobile: e.target.value })}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </label>

              {/* Referee Name */}
              <label className="block mb-2">
                <span className="text-gray-700">Referee Name</span>
                <input
                  type="text"
                  required
                  value={formData.refereeName}
                  onChange={(e) => setFormData({ ...formData, refereeName: e.target.value })}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </label>

              {/* Referee Mobile */}
              <label className="block mb-4">
                <span className="text-gray-700">Referee Mobile</span>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  value={formData.refereeMobile}
                  onChange={(e) => setFormData({ ...formData, refereeMobile: e.target.value })}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </label>

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded-md">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
