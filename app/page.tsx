import db from "../db";
const Home = async () => {
  const data = await db.task.findMany();

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
