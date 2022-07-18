import React from 'react';
import styled from 'styled-components';

export const Colors = () => {
  const onSubmit = async () => {
    const newUser = { name, email, password };

    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/users ', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <Color1 />
      <Color2 />
      <Color3 />
      <Color4 />
      <Color5 />
      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

const Color1 = styled.div`
  color: #003a68;
`;
const Color2 = styled.div`
  color: white;
`;
const Color3 = styled.div`
  color: #011826;
`;
const Color4 = styled.div`
  color: #ccd8e1;
`;

const Color5 = styled.div`
  color: #99d8e1;
`;
