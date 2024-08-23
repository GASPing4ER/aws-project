import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import Sidebar from "./components/Sidebar";
import "@aws-amplify/ui-react/styles.css";
import DashboardForm from "./components/DashboardForm";

Amplify.configure(outputs);

export default function App() {
  return (
    <div>
      <Authenticator>
        {({ signOut }) => (
          <main className="ml-[300px] h-screen">
            <Sidebar signOut={signOut || (() => {})} />
            <div className="p-10 flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Dashboard</h1>
              <p>Welcome to the dashboard. Customize your lead generation!</p>
              <DashboardForm />
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
