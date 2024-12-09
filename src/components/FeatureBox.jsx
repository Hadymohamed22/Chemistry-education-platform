import bookIcon from "../assets/books.svg";
import flaskIcon from "../assets/flask.svg";
import chatIcon from "../assets/fast-support.svg";
import notebookIcon from "../assets/notebook.svg";

function FeatureBox({ icon, subText, mainText }) {
  const icons = {
    books: bookIcon,
    notebook: notebookIcon,
    chat: chatIcon,
    flask: flaskIcon,
  };
  return (
    <div className="feature-box content-col-center py-8 rounded-lg shadow-3 text-center">
      <img src={icons[icon]} alt="feature icon" width={100} className="mb-4" />
      <h3 className="text-xl font-bold">{mainText}</h3>
      <p className="px-3 text-gray-400 text-sm mt-2">{subText}</p>
    </div>
  );
}
export default FeatureBox;
