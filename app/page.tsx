import db from "../db";
const Home = async () => {
  const data = await db.task.findMany();

  return (
    <div className="mx-auto max-w-2xl my-5">
      <h1>Home New</h1>
      <ul>
        {data.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
