import AddStudent from "./AddStudent";

const BodyContent = () => {
  return (
    <div className="md:grid grid-cols-2 mx-20 my-10">
      <div className="button border flex items-center justify-center">
        <AddStudent />
      </div>
      <div className="charts border flex items-center justify-center">
        charts here!
      </div>
    </div>
  );
};

export default BodyContent;
