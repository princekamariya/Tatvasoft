import { Button } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchResult = () => {
    const [searchValue, setSearchValue] = useState("");
    const [showResults, setShowResults] = useState(false);

    const handleSearch = () => {
        // Perform search operation using the searchValue
        // and update the search results accordingly

        // For now, let's just toggle the visibility of the search results
        setShowResults(!showResults);
    };

    return (
        <div className="searchBoxHomeOuter">
            <div className="searchBoxHome">
                <input
                    type="text"
                    placeholder="What are you looking for.."
                    style={{ display: "inline" }}
                />
                <Button
                    sx={{
                        color: "white",
                        backgroundColor: "#80bf32",
                        "&:hover": {
                            backgroundColor: "#6ca52c",
                        },
                    }}
                    variant="contained"
                    size="large"
                    onClick={handleSearch}
                >
                    <AiOutlineSearch style={{ color: "white" }} size={20} />
                    &nbsp;Search
                </Button>
            </div>
            {showResults && (
                <div className="searchResults">
                    HELLO
                </div>
            )}
        </div>
    );
};

export default SearchResult;
