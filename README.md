# Prayaas

Prayaas is a non-profit organization run by the students of IIIT Allahabad, dedicated to connecting hundreds of individuals with a shared vision—to brighten the future of underprivileged children. This website serves as a platform to:

- Showcase various events conducted by Prayaas.
- Share success stories and testimonials from alumni.
- Provide a seamless way to donate towards the betterment of children in Jhalwa, the community where IIIT Allahabad is located.

With an intuitive and responsive design, the Prayaas website reflects the organization's mission and helps foster positive change. Explore the website, contribute, and be a part of this impactful journey!

## Project Overview and features

#### User Management

- The admin can view detailed information about users assigned to different roles— **Member**, **Alumni**, or **None** — in an organized and responsive tabular format.
- Admin functionality includes the ability to seamlessly add new users or remove existing ones as needed.
- Each user's current status (Active or Inactive) is prominently displayed, with the option for the admin to update the status as required.

#### Role Management

- During registration, each user has to select one of three roles: Member, Alumni, or None, based on their association with Prayaas.
- The admin has full control to update or modify a user's role. For instance, if a member graduates from college, their role can be updated to _Alumni_ by the admin to reflect their new status.
- Each role is associated with a specific set of permissions:
  - **Member**: Can add new events, share success stories, and donate to Prayaas.
  - **Alumni**: Can contribute testimonials and make donations to support Prayaas.
  - **None**: Limited to donating to Prayaas.

#### Permission Handling

- The admin can view the specific set of permissions assigned to each user while managing the user list, ensuring clear visibility of access levels and privileges on the Prayaas website.

#### UI/UX

- Leveraging past experience in UI/UX design, this website has been meticulously crafted by applying core principles of usability, accessibility, and aesthetics, ensuring a user-centric and intuitive interface.
- Designed with a responsive layout powered by Tailwind CSS, the website delivers a consistent and seamless experience across devices of all sizes, from desktops to smartphones.

#### Backend API integration

- The server is fully functional and communicates with the client via RESTful API calls using **Axios**, enabling seamless interaction.
- Supports CRUD operations for managing users and roles, ensuring real-time updates and dynamic functionality.
- Designed with a focus on scalability and security, the APIs handle data validation and error management to maintain reliability and integrity.

## Tech Stacks

- ReactJs
- Tailwind CSS
- NodeJs
- ExpressJs
- MongoDB
- HTML
- Stripe API

## Installation

Follow these steps to set up and run the Prayaas website on your local machine:

1. Make sure your machine is connected to the internet.
2. Fork the repository.
3. Open a shell (command prompt, terminal, etc.) on your machine.
4. Change to the directory where you want to copy the project.
5. Clone the repository:
   </br>

   ```bash
   git clone https://github.com/<github-username>/Prayaas.git
   ```

6. Locate the installed repository:
   </br>

   ```bash
   cd Prayaas
   ```

7. Install the dependencies in the root directory of the project:
   </br>

   ```bash
   npm run install
   ```

8. Start both the server and client for development:
   </br>
   ```bash
   npm run watch
   ```

The app will be live on **localhost:3000**.
