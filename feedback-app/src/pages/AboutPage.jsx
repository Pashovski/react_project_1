import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback fora product or sercvice</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
