import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const navigate = useNavigate();

    const toggleDropdown = (userId) => {
        setDropdownVisible(prev => (prev === userId ? null : userId));
    };
    const handleClick = () => {
        navigate("/");
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.getAllUsers();
                setUsers(response.data);
                setFilteredUsers(response.data); // Initialize filtered users
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleAction = (action, userId) => {
        if (action === "Change Status") {
            alert(`Change status for user ID: ${userId}`);
        } else if (action === "Delete User") {
            alert(`Delete user ID: ${userId}`);
        }
        setDropdownVisible(null);
    };

    const handleSearchChange = (e) => {
        setSearchName(e.target.value);
    };

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    useEffect(() => {
        const filtered = users.filter(user => {
            const matchesName = user.name.toLowerCase().includes(searchName.toLowerCase());
            const matchesRole = selectedRole ? (user.is_admin ? "Admin" : user.is_member ? "Member" : user.is_alumni ? "Alumni" : "None") === selectedRole : true;
            const matchesStatus = selectedStatus ? (user.is_member ? "Active" : "Inactive") === selectedStatus : true;

            return matchesName && matchesRole && matchesStatus;
        });
        setFilteredUsers(filtered);
    }, [searchName, selectedRole, selectedStatus, users]);

    return (
        <div className="p-6 min-h-screen">
            <div className="grid grid-cols-2 justify-items-stretch items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734] justify-self-start">
                    Users
                </h1>
                <div
                    className="text-[#636363] hover:text-[#306F5E] cursor-pointer text-lg justify-self-end underline underline-offset-1"
                    onClick={handleClick}
                >
                    Go to home
                </div>
            </div>
            <div className="py-4">
                <div className="flex flex-wrap gap-4 md:flex-nowrap md:items-center">
                    {/* Search Box */}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchName}
                        onChange={handleSearchChange}
                        className="flex-grow p-2 border border-gray-300 rounded md:w-auto focus:outline-none focus:ring-2 focus:ring-[#306F5E]"
                    />

                    {/* Role Filter */}
                    <select
                        value={selectedRole}
                        onChange={handleRoleChange}
                        className="flex-grow p-2 border border-gray-300 rounded md:w-auto focus:outline-none focus:ring-2 focus:ring-[#306F5E]"
                    >
                        <option value="">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Member">Member</option>
                        <option value="Alumni">Alumni</option>
                        <option value="None">None</option>
                    </select>

                    {/* Status Filter */}
                    <select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        className="flex-grow p-2 border border-gray-300 rounded md:w-auto focus:outline-none focus:ring-2 focus:ring-[#306F5E]"
                    >
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>



            {/* Users Table */}
            <div class="overflow-auto rounded-lg shadow">

                <table className="w-full">
                    <thead className="bg-[#306F5E] text-white border-b-2">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">NAME</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">EMAIL</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">ROLE</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">STATUS</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        {filteredUsers.map((user, index) => (
                            <tr
                                key={user.user_id}
                                className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                    }`}
                            >
                                <td className="w-25 p-3 text-sm text-gray-700 whitespace-nowrap">{user.name}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.email}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {user.is_admin
                                        ? "Admin"
                                        : user.is_member
                                            ? "Member"
                                            : user.is_alumni
                                                ? "Alumni"
                                                : "None"}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {(user.is_member || user.is_admin) ? <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"> Active </span> : <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">Inactive</span>}
                                </td>
                                <td className="w-10 p-3 text-sm text-gray-700 text-center relative whitespace-nowrap">
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        onClick={() => toggleDropdown(user.user_id)}
                                    >
                                        &#x25BC;
                                    </button>
                                    {dropdownVisible === user.user_id && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                                            <button
                                                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => handleAction("Change Status", user.user_id)}
                                            >
                                                Change Status
                                            </button>
                                            <button
                                                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => handleAction("Delete User", user.user_id)}
                                            >
                                                Delete User
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ViewUsers;

