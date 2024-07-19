import MintItem from "./MintItem";
import Button from "./Button";

function handleDelete(id) {
  console.log("delete", id);
}

function MintList({ datas, activeSlide }) {
  console.log(activeSlide)
  if (activeSlide === "minted") {
  return (
    <div>
      <p>minted list</p>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            <a href="#">
              id: {data.id} {data.attributes[0].degree}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );}
  else if (activeSlide === "verified") {
    return (
    <div>
      <p>verified list</p>
      <ul>
        {datas.map((data) => (
          <MintItem metadata={data}/>
        ))}
      </ul>
    </div>
    );
  }
  else if (activeSlide === "pending") {
    return (
    <div>
      <p>pending list</p>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            <a href="#">
              id: {data.id} {data.attributes[0].degree}
            </a>
          </li>
        ))}
      </ul>
    </div>
    );
  }
  else if (activeSlide === "rejected") {
    return (
    <div>
      <p>rejected list</p>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            <a href="#">
              id: {data.id} {data.attributes[0].degree}
            </a>
            <Button
              title="delete"
              onClick={() => {
                handleDelete(data.id);
              }}
            />
          </li>
        ))}
      </ul>

    </div>
    );
  }
}

export default MintList;
