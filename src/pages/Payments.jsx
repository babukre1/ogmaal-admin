// src/pages/Payments.jsx
const Payments = () => {
    const payments = [
      {
        transactionId: "EVC12345",
        studentName: "Ahmed Ali dahir",
        amount: "$100",
        paymentDate: "2024-02-15",
        status: "Pending"
      },
      // Add more payment data as needed
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Payments Verification</h1>
        <p className="mb-6">Manage your payment and their content</p>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Payment management</h2>
          <p className="mb-4">View and manage all your payments</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="searchTransaction"
                className="mr-2"
              />
              <label htmlFor="searchTransaction">Search transaction-id, student name</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="searchStatus"
                checked
                className="mr-2"
              />
              <label htmlFor="searchStatus">Status</label>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transactions-ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payments Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.transactionId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.studentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.paymentDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:underline">Verify Payment</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Payments;