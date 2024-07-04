import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string,
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
   <h4>name: {name}</h4>
   <h4>email: {email}</h4>
   <p> message: {message}</p>
  </div>
);
