// import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card.jsx";
import "./App.css";
function App() {
  const profileData = [
    {
      name: "John Doe",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Random User Generator
    },
    {
      name: "Jane Smith",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://i.pravatar.cc/150?img=1", // Pravatar
    },
    {
      name: "Bob Brown",
      imageUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Charlie Davis",
      imageUrl: "https://api.adorable.io/avatars/150/abott@adorable.png", // Adorable Avatars
    },
    {
      name: "Diana Evans",
      imageUrl: "https://api.adorable.io/avatars/150/ben@adorable.png",
    },
    {
      name: "Emily Clark",
      imageUrl: "https://ui-avatars.com/api/?name=John+Doe", // UI Avatars
    },
    {
      name: "Frank Moore",
      imageUrl: "https://ui-avatars.com/api/?name=Jane+Doe",
    },
    {
      name: "George Wilson",
      imageUrl: "https://placekitten.com/150/150", // PlaceKitten
    },
    {
      name: "Hannah Martinez",
      imageUrl: "https://placekitten.com/150/151",
    },
    {
      name: "Ian Lee",
      imageUrl: "https://www.fillmurray.com/150/150", // Fill Murray
    },
    {
      name: "Jessica White",
      imageUrl: "https://www.fillmurray.com/150/151",
    },
    {
      name: "Kevin Harris",
      imageUrl: "https://www.thecatapi.com/cat.jpg", // The Cat API
    },
    {
      name: "Lily Lewis",
      imageUrl:
        "https://www.thecatapi.com/cat/0a8b71f4-9e09-4e22-8f4d-57d583e0d5c5",
    },
    {
      name: "Mia Young",
      imageUrl: "https://placebear.com/150/150", // PlaceBear
    },
    {
      name: "Noah King",
      imageUrl: "https://placebear.com/150/151",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-y-5">
        {profileData.map((profile, index) => (
          <Card
            key={index}
            name={profile.name}
            imgUrl={profile.imageUrl}
          ></Card>
        ))}
      </div>
    </>
  );
}
export default App;
