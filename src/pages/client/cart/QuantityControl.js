// import React from "react";
// import { useState } from "react";
// import { IconButton, Typography, Remove, Add } from "@mui/material";
// const QuantityControl = () => {
//     const [quantity, setQuantity] = useState(1);
  
//     const handleAdd = () => {
//       setQuantity(quantity + 1);
//     };
  
//     const handleRemove = () => {
//       if (quantity > 1) {
//         setQuantity(quantity - 1);
//       }
//     };
  
//     return (
//       <div>
//         <Typography variant="body1">Quantity:</Typography>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <IconButton onClick={handleRemove} size="large">
//             <Remove />
//           </IconButton>
//           <Typography variant="body1">{quantity}</Typography>
//           <IconButton onClick={handleAdd} size="large">
//             <Add />
//           </IconButton>
//         </div>
//       </div>
//     );
//   };
  