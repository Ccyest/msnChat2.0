import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import supabase from '@/config/supabaseClient'; // Import your Supabase client

// Define your user interface
interface User {
  id: number;
  create_at: string; // Or Date if you want to handle it as a Date object
  email: string;
  bio: string;
  matched_with: string[];
  tags: string[];
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]); // Notice the User[] type here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('User').select('*');
      if (data) {
        setUsers(data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div>
        <h1>Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.email}</h2>
            <p>{user.bio}</p>
            {/* Add other fields as necessary */}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default UserList;
