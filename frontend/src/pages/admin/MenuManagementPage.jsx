// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MenuManagementPage = () => {
//   const [menus, setMenus] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('/api/menus')
//       .then(response => {
//         setMenus(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const handleAddMenu = () => {
//     // add new menu logic
//   };

//   const handleEditMenu = () => {
//     // edit menu logic
//   };

//   const handleDeleteMenu = () => {
//     // delete menu logic
//   };

//   return (
//     <div style={{paddingLeft:"5rem"} }>
//       <h1>Menu Management</h1>
//       <ul>
//         {menus.map(menu => (
//           <li key={menu._id}>
//             <span>{menu.name}</span>
//             <button onClick={handleEditMenu}>Edit</button>
//             <button onClick={handleDeleteMenu}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddMenu}>Add New Menu</button>
//     </div>
//   );
// };

// export default MenuManagementPage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MenuManagementPage = () => {
//   const [menus, setMenus] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null, // Image file
//   });
//   const [editMenuId, setEditMenuId] = useState(null);

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   // Fetch Menus from Backend
//   const fetchMenus = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/menu/menus");
//       setMenus(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching menus:", error);
//       setLoading(false);
//     }
//   };

//   // Handle Input Changes
//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setFormData({ ...formData, image: e.target.files[0] }); // Store file object
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Handle Add Menu
//   const handleAddMenu = async (event) => {
//     event.preventDefault();

//     if (!formData.name || !formData.description || !formData.image) {
//       return alert("All fields are required!");
//     }

//     const newFormData = new FormData();
//     newFormData.append("name", formData.name);
//     newFormData.append("description", formData.description);
//     // newFormData.append("price", formData.price);
//     newFormData.append("image", formData.image);

//     try {
//       const response = await axios.post("http://localhost:5000/api/menu/add-menu", newFormData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.status === 200) {
//         setMenus([...menus, response.data]);
//         setFormData({ name: "", description: "", price: "", image: null });
//       }
//     } catch (error) {
//       console.error("Error adding menu:", error.response?.data || error.message);
//     }
//   };

//   // Handle Edit Menu
//   const handleEditMenu = async () => {
//     if (!formData.name || !formData.description ) {
//       return alert("All fields are required!");
//     }

//     const updateFormData = new FormData();
//     updateFormData.append("name", formData.name);
//     updateFormData.append("description", formData.description);
//     // updateFormData.append("price", formData.price);
//     if (formData.image) updateFormData.append("image", formData.image);

//     try {
//       await axios.put(`http://localhost:5000/api/menu/edit-menu/${editMenuId}`, updateFormData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       fetchMenus();
//       setEditMenuId(null);
//       setFormData({ name: "", description: "", image: null });
//     } catch (error) {
//       console.error("Error editing menu:", error.response?.data || error.message);
//     }
//   };

//   // Handle Delete Menu
//   const handleDeleteMenu = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this menu?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/menu/delete-menu/${id}`);
//       setMenus(menus.filter(menu => menu._id !== id));
//     } catch (error) {
//       console.error("Error deleting menu:", error);
//     }
//   };

//   return (
//     <div style={{ paddingLeft: "5rem" }}>
//       <h1>Menu Management</h1>
//       {loading ? (
//         <p>Loading menus...</p>
//       ) : (
//         <ul>
//           {menus.map((menu) => (
//             <li key={menu._id}>
//               {editMenuId === menu._id ? (
//                 <>
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//                   <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//                   {/* <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" /> */}
//                   <input type="file" name="image" onChange={handleChange} />
//                   <button onClick={handleEditMenu}>Save</button>
//                   <button onClick={() => setEditMenuId(null)}>Cancel</button>
//                 </>
//               ) : (
//                 <>
//                   <span>{menu.name} - {menu.description}</span>
//                   {menu.image && <img src={`http://localhost:5000/uploads/${menu.image}`} alt={menu.name} style={{ width: "50px", height: "50px", marginLeft: "10px" }} />}
//                   <button onClick={() => { setEditMenuId(menu._id); setFormData(menu); }}>Edit</button>
//                   <button onClick={() => handleDeleteMenu(menu._id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div>
//         <h3>{editMenuId ? "Edit Menu" : "Add New Menu"}</h3>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//         <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//         {/* <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" /> */}
//         <input type="file" name="image" onChange={handleChange} />
//         <button onClick={editMenuId ? handleEditMenu : handleAddMenu}>
//           {editMenuId ? "Save Changes" : "Add Menu"}
//         </button>
//         {editMenuId && <button onClick={() => setEditMenuId(null)}>Cancel</button>}
//       </div>
//     </div>
//   );
// };

// export default MenuManagementPage;







// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MenuManagementPage = () => {
//   const [menus, setMenus] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null, // Image file
//   });
//   const [editMenuId, setEditMenuId] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false); // To control form visibility

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   // Fetch Menus from Backend
//   const fetchMenus = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/menu/menus");
//       setMenus(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching menus:", error);
//       setLoading(false);
//     }
//   };

//   // Handle Input Changes
//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setFormData({ ...formData, image: e.target.files[0] }); // Store file object
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Handle Add Menu
//   const handleAddMenu = async (event) => {
//     event.preventDefault();

//     if (!formData.name || !formData.description || !formData.image) {
//       return alert("All fields are required!");
//     }

//     const newFormData = new FormData();
//     newFormData.append("name", formData.name);
//     newFormData.append("description", formData.description);
//     newFormData.append("image", formData.image);

//     try {
//       const response = await axios.post("http://localhost:5000/api/menu/add-menu", newFormData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.status === 200) {
//         setMenus([...menus, response.data]);
//         setFormData({ name: "", description: "", price: "", image: null });
//         setIsFormVisible(false); // Hide form after adding
//       }
//     } catch (error) {
//       console.error("Error adding menu:", error.response?.data || error.message);
//     }
//   };

//   // Handle Edit Menu
//   const handleEditMenu = async () => {
//     if (!formData.name || !formData.description) {
//       return alert("All fields are required!");
//     }

//     const updateFormData = new FormData();
//     updateFormData.append("name", formData.name);
//     updateFormData.append("description", formData.description);
//     if (formData.image) updateFormData.append("image", formData.image);

//     try {
//       await axios.put(`http://localhost:5000/api/menu/edit-menu/${editMenuId}`, updateFormData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       fetchMenus();
//       setEditMenuId(null);
//       setFormData({ name: "", description: "", image: null });
//     } catch (error) {
//       console.error("Error editing menu:", error.response?.data || error.message);
//     }
//   };

//   // Handle Delete Menu
//   const handleDeleteMenu = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this menu?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/menu/delete-menu/${id}`);
//       setMenus(menus.filter(menu => menu._id !== id));
//     } catch (error) {
//       console.error("Error deleting menu:", error);
//     }
//   };

//   return (
//     <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
//       <h1>Menu Management</h1>

//       {/* Button to Show Add Menu Form */}
//       {!isFormVisible && (
//         <button onClick={() => setIsFormVisible(true)}>Add New Menu</button>
//       )}

//       {/* Add/Edit Menu Form */}
//       {isFormVisible && (
//         <div className="my-4">
//           <h3>{editMenuId ? "Edit Menu" : "Add New Menu"}</h3>
//           <form onSubmit={editMenuId ? handleEditMenu : handleAddMenu}>
//             <div>
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//               />
//             </div>

//             <div>
//               <label>Description</label>
//               <input
//                 type="text"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Description"
//                 required
//               />
//             </div>

//             {/* <div>
//               <label>Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Price"
//               />
//             </div> */}

//             <div>
//               <label>Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <button type="submit">{editMenuId ? "Save Changes" : "Add Menu"}</button>
//               {editMenuId && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setEditMenuId(null);
//                     setFormData({ name: "", description: "", image: null });
//                     setIsFormVisible(false); // Hide form if cancelled
//                   }}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Menu Table */}
//       {loading ? (
//         <p>Loading menus...</p>
//       ) : (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {menus.map((menu) => (
//               <tr key={menu._id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{menu.name}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{menu.description}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {menu.image && (
//                     <img
//                       src={`http://localhost:5000/uploads/${menu.image}`}
//                       alt={menu.name}
//                       style={{ width: "50px", height: "50px" }}
//                     />
//                   )}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <button onClick={() => { setEditMenuId(menu._id); setFormData(menu); setIsFormVisible(true); }}>Edit</button>
//                   <button onClick={() => handleDeleteMenu(menu._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MenuManagementPage;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Edit, Trash2 } from "lucide-react"; // Import Lucide icons
// import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// const MenuManagementPage = () => {
//   const [menus, setMenus] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null, // Image file
//   });
//   const [editMenuId, setEditMenuId] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false); // To control form visibility
//   const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   // Fetch Menus from Backend
//   const fetchMenus = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/menu/menus");
//       setMenus(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching menus:", error);
//       setLoading(false);
//     }
//   };

//   // Handle Input Changes
//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setFormData({ ...formData, image: e.target.files[0] }); // Store file object
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Handle Add Menu
//   const handleAddMenu = async (event) => {
//     event.preventDefault();

//     // Validation check
//     if (!formData.name || !formData.description || !formData.image) {
//       return alert("All fields are required!");
//     }

//     setIsSubmitting(true); // Disable button during submission

//     const newFormData = new FormData();
//     newFormData.append("name", formData.name);
//     newFormData.append("description", formData.description);
//     newFormData.append("image", formData.image);

//     try {
//       const response = await axios.post("http://localhost:5000/api/menu/add-menu", newFormData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.status === 200) {
//         setMenus([...menus, response.data]); // Add new menu to the list
//         setFormData({ name: "", description: "", price: "", image: null }); // Clear form data
//         setIsFormVisible(false); // Close the form modal
//         toast.success("Menu Added Successfully!"); // Show success toast
//       }
//     } catch (error) {
//       console.error("Error adding menu:", error.response?.data || error.message);
//       toast.error("Failed to add menu!"); // Show error toast
//     } finally {
//       setIsSubmitting(false); // Reset submitting state
//     }
//   };

//   // Handle Edit Menu
//   const handleEditMenu = async () => {
//     if (!formData.name || !formData.description) {
//       return alert("All fields are required!");
//     }

//     const updateFormData = new FormData();
//     updateFormData.append("name", formData.name);
//     updateFormData.append("description", formData.description);
//     if (formData.image) updateFormData.append("image", formData.image);

//     try {
//       await axios.put(`http://localhost:5000/api/menu/edit-menu/${editMenuId}`, updateFormData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       fetchMenus();
//       setEditMenuId(null);
//       setFormData({ name: "", description: "", image: null });
//       toast.success("Menu Updated Successfully!"); // Show success toast on edit
//     } catch (error) {
//       console.error("Error editing menu:", error.response?.data || error.message);
//       toast.error("Failed to update menu!"); // Show error toast
//     }
//   };

//   // Handle Delete Menu
//   const handleDeleteMenu = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this menu?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/menu/delete-menu/${id}`);
//       setMenus(menus.filter(menu => menu._id !== id)); // Remove menu from the list
//       toast.success("Menu Deleted Successfully!"); // Show success toast on delete
//     } catch (error) {
//       console.error("Error deleting menu:", error);
//       toast.error("Failed to delete menu!"); // Show error toast
//     }
//   };

//   return (
//     <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
//       <h1>Menu Management</h1>

//       {/* Button to Show Add Menu Form */}
//       <button onClick={() => setIsFormVisible(true)} style={{ marginBottom: "20px" }}>
//         Add New Menu
//       </button>

//       {/* Modal for Add/Edit Menu */}
//       {isFormVisible && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             right: "0",
//             bottom: "0",
//             background: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: "999",
//           }}
//         >
//           <div
//             style={{
//               background: "white",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "400px",
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3>{editMenuId ? "Edit Menu" : "Add New Menu"}</h3>
//             <form onSubmit={editMenuId ? handleEditMenu : handleAddMenu}>
//               <div>
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label>Description</label>
//                 <input
//                   type="text"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Description"
//                   required
//                 />
//               </div>

//               <div>
//                 <label>Image</label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <button type="submit" disabled={isSubmitting}>
//                   {isSubmitting ? "Adding..." : editMenuId ? "Save Changes" : "Add Menu"}
//                 </button>
//                 {editMenuId && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setEditMenuId(null);
//                       setFormData({ name: "", description: "", image: null });
//                       setIsFormVisible(false); // Hide form if cancelled
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Menu Table */}
//       {loading ? (
//         <p>Loading menus...</p>
//       ) : (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {menus.map((menu) => (
//               <tr key={menu._id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{menu.name}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{menu.description}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {menu.image && (
//                     <img
//                       src={`http://localhost:5000/uploads/${menu.image}`}
//                       alt={menu.name}
//                       style={{ width: "50px", height: "50px" }}
//                     />
//                   )}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <button
//                     onClick={() => {
//                       setEditMenuId(menu._id);
//                       setFormData(menu);
//                       setIsFormVisible(true);
//                     }}
//                     style={{ marginRight: "10px" }}
//                   >
//                     <Edit color="green" />
//                   </button>
//                   <button onClick={() => handleDeleteMenu(menu._id)}>
//                     <Trash2 color="red" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Toast container to show notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default MenuManagementPage;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Edit, Trash2 } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const MenuManagementPage = () => {
//   const [menus, setMenus] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//   });
//   const [editMenuId, setEditMenuId] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   // Fetch Menus from Backend
//   const fetchMenus = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/menu/menus");
//       setMenus(response.data);
//     } catch (error) {
//       console.error("Error fetching menus:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Input Changes
//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setFormData({ ...formData, image: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Handle Add/Edit Menu
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!formData.name || !formData.description) {
//       toast.error("All fields are required!");
//       return;
//     }
//     if (isSubmitting) return;
//     setIsSubmitting(true);

//     const newFormData = new FormData();
//     newFormData.append("name", formData.name);
//     newFormData.append("description", formData.description);
//     newFormData.append("price", formData.price);
//     if (formData.image) newFormData.append("image", formData.image);

//     try {
//       let response;
//       if (editMenuId) {
//         response = await axios.put(`http://localhost:5000/api/menu/edit-menu/${editMenuId}`, newFormData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         toast.success("Menu Updated Successfully!");
//       } else {
//         response = await axios.post("http://localhost:5000/api/menu/add-menu", newFormData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         toast.success("Menu Added Successfully!");
//       }

//       // Update the menu list in real-time
//       if (editMenuId) {
//         setMenus(menus.map((menu) => (menu._id === editMenuId ? response.data : menu)));
//       } else {
//         setMenus([...menus, response.data]);
//       }

//       resetForm();
//     } catch (error) {
//       console.error("Error saving menu:", error);
//       toast.error("Failed to save menu!");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle Delete Menu
//   const handleDeleteMenu = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this menu?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/menu/delete-menu/${id}`);
//       toast.success("Menu Deleted Successfully!");
//       setMenus(menus.filter((menu) => menu._id !== id));
//     } catch (error) {
//       console.error("Error deleting menu:", error);
//       toast.error("Failed to delete menu!");
//     }
//   };

//   // Reset Form
//   const resetForm = () => {
//     setEditMenuId(null);
//     setFormData({ name: "", description: "", price: "", image: null });
//     setIsFormVisible(false);
//   };

//   return (
//     <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
//       <h1>Menu Management</h1>

//       <button onClick={() => setIsFormVisible(true)} style={{ marginBottom: "20px" }}>
//         Add New Menu
//       </button>

//       {/* Add/Edit Menu Form */}
//       {isFormVisible && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             right: "0",
//             bottom: "0",
//             background: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: "999",
//           }}
//         >
//           <div
//             style={{
//               background: "white",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "400px",
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3>{editMenuId ? "Edit Menu" : "Add New Menu"}</h3>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Name</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//               </div>

//               <div>
//                 <label>Description</label>
//                 <input type="text" name="description" value={formData.description} onChange={handleChange} required />
//               </div>

//               <div>
//                 <label>Price</label>
//                 <input type="number" name="price" value={formData.price} onChange={handleChange} required />
//               </div>

//               <div>
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} />
//               </div>

//               <div>
//                 <button type="submit" disabled={isSubmitting}>
//                   {isSubmitting ? "Processing..." : editMenuId ? "Save Changes" : "Add Menu"}
//                 </button>
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Menu Table */}
//       {loading ? (
//         <p>Loading menus...</p>
//       ) : (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {menus.map((menu) => (
//               <tr key={menu._id}>
//                 <td>{menu.name}</td>
//                 <td>{menu.description}</td>
//                 <td>${menu.price}</td>
//                 <td>
//                   {menu.image && <img src={`http://localhost:5000/uploads/${menu.image}`} alt={menu.name} width="50" />}
//                 </td>
//                 <td>
//                   <button onClick={() => { setEditMenuId(menu._id); setFormData(menu); setIsFormVisible(true); }}>
//                     <Edit color="green" />
//                   </button>
//                   <button onClick={() => handleDeleteMenu(menu._id)}>
//                     <Trash2 color="red" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MenuManagementPage;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash2, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuManagementPage = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", description: "",  image: null });
  const [editMenuId, setEditMenuId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/menu/menus");
      setMenus(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching menus:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.description) {
      return toast.error("All fields are required!");
    }
    setIsSubmitting(true);

    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("description", formData.description);
    if (formData.image) newFormData.append("image", formData.image);

    try {
      let response;
      if (editMenuId) {
        response = await axios.put(`http://localhost:5000/api/menu/edit-menu/${editMenuId}`, newFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMenus(menus.map((menu) => (menu._id === editMenuId ? response.data : menu)));
        toast.success("Menu Updated Successfully!");
      } else {
        response = await axios.post("http://localhost:5000/api/menu/add-menu", newFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMenus([...menus, response.data]);
        toast.success("Menu Added Successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Error saving menu:", error);
      toast.error("Failed to save menu!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteMenu = async (id) => {
    if (!window.confirm("Are you sure you want to delete this menu?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/menu/delete-menu/${id}`);
      setMenus(menus.filter((menu) => menu._id !== id));
      toast.success("Menu Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting menu:", error);
      toast.error("Failed to delete menu!");
    }
  };

  const resetForm = () => {
    setEditMenuId(null);
    setFormData({ name: "", description: "",  image: null });
    setIsFormVisible(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" , paddingLeft: "5rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Menu Management</h1>

      <button
        onClick={() => {
          resetForm();
          setIsFormVisible(true);
        }}
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 15px",
          border: "none",
          cursor: "pointer",
          display: "block",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        Add New Menu
      </button>

      {isFormVisible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "350px",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <h3>{editMenuId ? "Edit Menu" : "Add New Menu"}</h3>
              <X style={{ cursor: "pointer" }} onClick={() => setIsFormVisible(false)} />
            </div>

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />

              <label>Description</label>
              <input type="text" name="description" value={formData.description} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />


              <label>Image</label>
              <input type="file" name="image" onChange={handleChange} style={{ width: "100%", marginBottom: "10px" }} />

              <button type="submit" style={{ background: "#007bff", color: "white", padding: "10px", width: "100%", border: "none", cursor: "pointer" }}>
                {isSubmitting ? "Saving..." : editMenuId ? "Save Changes" : "Add Menu"}
              </button>
            </form>
          </div>
        </div>
      )}

      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Description</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Image</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu._id}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{menu.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{menu.description}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {menu.image && <img src={`http://localhost:5000/uploads/${menu.image}`} alt={menu.name} style={{ width: "50px", height: "50px", objectFit: "cover" }} />}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                <button onClick={() => { setEditMenuId(menu._id); setFormData(menu); setIsFormVisible(true); }}>Edit</button>
                <button onClick={() => handleDeleteMenu(menu._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  );
};

export default MenuManagementPage;
