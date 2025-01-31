# microfrontend
# *Micro-Frontend Architecture with React & Module Federation*  

## *📌 Overview*  
This project demonstrates a *Micro-Frontend Architecture* using *React* and *Webpack Module Federation. It consists of a **host application* (HOST-app) that dynamically loads two *micro-frontends* (chat-app and email-app).  

### *🔹 Key Features*  
- Modular and scalable architecture  
- Independent micro-frontends  
- Shared dependencies between applications  
- Lazy loading of micro-frontends using React Suspense  

---

## *📂 Project Structure*
microfrontend-project/ │── HOST-app/ # Host Application │── chat-app/ # Chat Micro-Frontend │── email-app/ # Email Micro-Frontend
Each app contains its own src directory, components, and Webpack configuration.  

---

## *🚀 How to Use This Project*  

### *⿡ Clone the Repository*  
```sh
git clone https://github.com/PrajapatiDheerendra45/microfrontend.git
cd microfrontend-project

Install Dependencies
Navigate into each app folder and install dependencies:

sh
Copy code
cd HOST-app
npm install
cd ../chat-app
npm install
cd ../email-app
npm install

Start the Applications
Each app runs on a different port. Open three terminal windows and run:

Run HOST App (Host)
sh
Copy code
cd HOST-app
npm run  dev
Run Chat App (Micro-Frontend)
sh
Copy code
cd ../chat-app
npm run dev
Run Email App (Micro-Frontend)
sh
Copy code
cd ../email-app
npm run dev
Now, open http://localhost:3000 in your browser. The HOST app will dynamically load both micro-frontends
License
This project is licensed under the MIT License.

📞 Contact 6260470125
👨‍💻 Developed by Dheerendra prajapati
📧 Email: prajapatidheerendra45@gmail.com
🔗 GitHub: https://github.com/PrajapatiDheerendra45/ 
