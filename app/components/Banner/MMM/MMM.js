import React, { useEffect, useState } from "react";

const MMM = () => {
    const MATRIX_DIM = 20;
    const INTERVAL = 15000;

    /**
     * Create a 20x20 matrix filled with the letter M and a property to determine whether it should be shown or not
     * @returns {*[]}
     */
    const setInitialMatrix = () => {
        const initialMatrix = [];
        let toCheck = 0;
        for (let i = 0; i < MATRIX_DIM; i++) {
            initialMatrix.push([]);
            for (let j = 0; j < MATRIX_DIM; j++) {
                toCheck = j % 4;
                if( toCheck === 0 ){
                    if ( i > 5){
                        initialMatrix[i].push({ letter: "M", isShown: Math.random() < 0.5 });
                    } else {
                        initialMatrix[i].push({ letter: "s", isShown: true });
                    }
                } else if ( toCheck === 1 ){
                    if ( i > 1){
                        initialMatrix[i].push({ letter: "M", isShown: Math.random() < 0.5 });
                    } else {
                        initialMatrix[i].push({ letter: "s", isShown: true });
                    }
                } else if ( toCheck === 2 ){
                    if ( i > 2){
                        initialMatrix[i].push({ letter: "M", isShown: Math.random() < 0.5 });
                    } else {
                        initialMatrix[i].push({ letter: "s", isShown: true });
                    }
                } else if ( toCheck === 3 ){
                    if ( i > 0){
                        initialMatrix[i].push({ letter: "M", isShown: Math.random() < 0.5 });
                    } else {
                        initialMatrix[i].push({ letter: "s", isShown: true });
                    }
                }else{
                    initialMatrix[i].push({ letter: "M", isShown: Math.random() < 0.5 });
                }
            }
        }
        return initialMatrix;
    };

    /**
     * Update the matrix by randomly showing or hiding the letters
     * @returns {*[]}
     */
    const updateMatrix = () => {
        setMatrix((matrix) => {
            const newMatrix = [...matrix];
            for (let i = 0; i < MATRIX_DIM; i++) {
                for (let j = 0; j < MATRIX_DIM; j++) {
                    setTimeout(() => {
                        newMatrix[i][j].isShown = Math.random() < 0.5;
                        setMatrix([...newMatrix]);
                    }, Math.random() * INTERVAL);
                }
            }
            return newMatrix;
        });
    };

    // Create a 20x20 matrix filled with the letter M
    const [matrix, setMatrix] = useState(setInitialMatrix());

    useEffect(() => {
        updateMatrix(); // Call updateMatrix immediately after setting the initial matrix
        const intervalId = setInterval(() => {
            updateMatrix();
        }, INTERVAL); // Update every 5 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        // Display the matrix
        <div className={"MMM"}>
            {matrix.map((row, i) => {
                return (
                    <div className={"row"} key={i}>
                        {row.map((col, j) => {
                            return (
                                <div className={`col ${col.isShown ? 'col-fade-in' : 'col-fade-out'}`} key={j}>
                                    {col.isShown && col.letter!== "s" ? col.letter : <span style={{ visibility: "hidden" }}>&nbsp;</span>}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default MMM;
