import React from 'react';
import { Users } from 'lucide-react'; // Icon for users

const ShowAllUsersPage = () => {
  // Dummy user data for demonstration
  const dummyUsers = [
    { _id: 'u1', name: 'John Doe', email: 'john.doe@example.com', role: 'Customer' },
    { _id: 'u2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin' },
    { _id: 'u3', name: 'Peter Jones', email: 'peter.j@example.com', role: 'Customer' },
  ];

  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800 font-medium">{user.name}</td>
                <td className="py-3 px-4 text-gray-700">{user.email}</td>
                <td className="py-3 px-4 text-gray-700">{user.role}</td>
                <td className="py-3 px-4">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* In a real app, you'd fetch data using your user API and display it here */}
    </div>
  );
};

export default ShowAllUsersPage;
