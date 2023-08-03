import profilePhoto from "../assets/profile-photo.jpeg"

export default function Title() {
    return (
      <div className="title-container">
        <div className="image-container">
          <img className="profile-photo" alt="Ray'sphoto" src={profilePhoto}></img>
        </div>
        <div>
          <h2 className="username">Raymond Nguyen</h2>
          <h3 className="positionTitle">Frontend Developer</h3>
          <a className="githubLink" href="https://github.com/Fenaum">https://github.com/Fenaum</a>
        </div>
      </div>
    );
};