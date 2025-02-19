```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

```
This improved version uses a `try...catch` block to handle potential errors, providing feedback to the user and logging the error for debugging purposes.