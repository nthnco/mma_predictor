import { useState } from 'react';
import './App.css';

function App() {
  // State to store input values for Fighter 1 and Fighter 2
  const [fighter1, setFighter1] = useState({
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
    feature9: '',
    feature10: '',
    feature11: '',
    feature12: '',
    feature13: ''
    // Add more features as needed
  });

  const [fighter2, setFighter2] = useState({
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
    feature9: '',
    feature10: '',
    feature11: '',
    feature12: '',
    feature13: ''
    // Add more features as needed
  });

  const [prediction, setPrediction] = useState<string | null>(null);

  // Handle input changes for Fighter 1
  const handleFighter1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFighter1({ ...fighter1, [name]: value });
  };

  // Handle input changes for Fighter 2
  const handleFighter2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFighter2({ ...fighter2, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fighter1, fighter2 }),
      });
      const data = await response.json();
      setPrediction(data.prediction); // Update prediction state with the result
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App" style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'black' }}>MMA Predictor</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
          {/* Fighter 1 */}
          <div style={{ flex: 1, padding: '15px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Fighter 1</h2>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Current Win Streak:</label>
              <input
                type="number"
                name="feature1"
                value={fighter1.feature1}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Current Lose Streak:</label>
              <input
                type="number"
                name="feature2"
                value={fighter1.feature2}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Average Strikes Landed per Minute:</label>
              <input
                type="number"
                name="feature3"
                value={fighter1.feature3}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Average Submissions:</label>
              <input
                type="number"
                name="feature4"
                value={fighter1.feature4}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Strikes Absorbed per Minute:</label>
              <input
                type="number"
                name="feature5"
                value={fighter1.feature5}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Strikes Accuracy (Not in decimal form):</label>
              <input
                type="number"
                name="feature6"
                value={fighter1.feature6}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Takedown Average:</label>
              <input
                type="number"
                name="feature7"
                value={fighter1.feature7}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Takedown Accuracy (Not in decimal form):</label>
              <input
                type="number"
                name="feature8"
                value={fighter1.feature8}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Takedown Defense (Not in decimal form):</label>
              <input
                type="number"
                name="feature9"
                value={fighter1.feature9}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Striking Defense:</label>
              <input
                type="number"
                name="feature10"
                value={fighter1.feature10}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Reach (in cm):</label>
              <input
                type="number"
                name="feature11"
                value={fighter1.feature11}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Height (in cm):</label>
              <input
                type="number"
                name="feature12"
                value={fighter1.feature12}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Age:</label>
              <input
                type="number"
                name="feature13"
                value={fighter1.feature13}
                onChange={handleFighter1Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
          </div>

          {/* Fighter 2 */}
          <div style={{ flex: 1, padding: '15px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Fighter 2</h2>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Current Win Streak:</label>
              <input
                type="number"
                name="feature1"
                value={fighter2.feature1}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Current Lose Streak:</label>
              <input
                type="number"
                name="feature2"
                value={fighter2.feature2}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Average Strikes Landed per Minute:</label>
              <input
                type="number"
                name="feature3"
                value={fighter2.feature3}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Average Submissions:</label>
              <input
                type="number"
                name="feature4"
                value={fighter2.feature4}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Strikes Absorbed per Minute:</label>
              <input
                type="number"
                name="feature5"
                value={fighter2.feature5}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Strikes Accuracy (Not in decimal form):</label>
              <input
                type="number"
                name="feature6"
                value={fighter2.feature6}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Takedown Average:</label>
              <input
                type="number"
                name="feature7"
                value={fighter2.feature7}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Takedown Accuracy (Not in decimal form):</label>
              <input
                type="number"
                name="feature8"
                value={fighter2.feature8}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Takedown Defense (Not in decimal form):</label>
              <input
                type="number"
                name="feature9"
                value={fighter2.feature9}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Striking Defense:</label>
              <input
                type="number"
                name="feature10"
                value={fighter2.feature10}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Reach (in cm):</label>
              <input
                type="number"
                name="feature11"
                value={fighter2.feature11}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Height (in cm):</label>
              <input
                type="number"
                name="feature12"
                value={fighter2.feature12}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'black' }}>Age:</label>
              <input
                type="number"
                name="feature13"
                value={fighter2.feature13}
                onChange={handleFighter2Change}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  color: 'black',
                }}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            alignSelf: 'center',
          }}
        >
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div style={{ marginTop: '30px', textAlign: 'center', color: 'black' }}>
          <h2>Prediction Result:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}

export default App;