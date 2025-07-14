# 📚 Book Catalogue Frontend

A modern React application for managing a book catalogue with a clean, responsive user interface. Built with Vite, React Router, and Axios for seamless API communication.

## 🏗️ Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AddBook.jsx     # Book creation form
│   │   ├── BookList.jsx    # Book display component
│   │   └── EditBook.jsx    # Book editing component (placeholder)
│   ├── services/           # API service layer
│   │   └── api.js          # Axios configuration
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── App.css             # Main application styles
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── index.html              # HTML template
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Backend server** running on `http://localhost:5004`

### Installation

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 🧩 Components

### App.jsx
The main application component that sets up routing and navigation.

**Features:**
- React Router setup with BrowserRouter
- Navigation menu with links
- Route configuration for different pages

**Routes:**
- `/` - Welcome page
- `/add` - Add Book form

### AddBook.jsx
A form component for adding new books to the catalogue.

**Features:**
- Controlled form inputs for book details
- Form validation
- API integration with backend
- Success/error feedback
- Form reset after successful submission

**Form Fields:**
- Title (required)
- Author (required)
- Description (required)
- Published Year (required, number)

### BookList.jsx
A component for displaying the list of books.

**Features:**
- Fetches books from API on component mount
- Displays books in a list format
- Handles empty state
- Error handling for API calls

### EditBook.jsx
A placeholder component for editing existing books (currently empty).

## 🔧 Configuration

### API Configuration
The API service is configured in `src/services/api.js`:

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5004/api",
});

export default API;
```

### Environment Variables (Recommended)
Create a `.env` file in the frontend directory for environment-specific configuration:

```env
VITE_API_URL=http://localhost:5004/api
VITE_APP_TITLE=Book Catalogue
```

Then update `src/services/api.js`:
```javascript
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5004/api",
});

export default API;
```

## 🎨 Styling

The application uses CSS for styling with the following structure:

- **index.css** - Global styles and CSS reset
- **App.css** - Main application styles
- Component-specific styles can be added as needed

### CSS Features
- Responsive design
- Modern CSS properties
- Clean and minimal aesthetic

## 🔌 API Integration

The frontend communicates with the backend through RESTful API calls:

### Available Endpoints
- `GET /api/books` - Fetch all books
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

### Error Handling
- Network errors are logged to console
- User-friendly error messages via alerts
- Graceful degradation for failed API calls

## 🛠️ Development

### Code Quality
- ESLint configuration for code linting
- React best practices enforced
- Consistent code formatting

### Hot Reload
Vite provides fast hot module replacement for development:
- Instant updates on file changes
- Preserves component state during development
- Fast build times

### Adding New Features

1. **Create new components** in `src/components/`
2. **Add API methods** in `src/services/api.js` if needed
3. **Update routing** in `App.jsx` for new pages
4. **Add styles** as needed

### Component Guidelines
- Use functional components with hooks
- Implement proper error handling
- Add loading states for better UX
- Use controlled components for forms
- Implement proper prop validation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

1. **Vercel** (Recommended):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**:
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **GitHub Pages**:
   - Add `gh-pages` package
   - Configure in `package.json`
   - Deploy with `npm run deploy`

### Environment Configuration for Production
Update the API base URL for production:

```javascript
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://your-backend-url.com/api",
});
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend Connection Error**
   - Ensure backend server is running on port 5004
   - Check if CORS is properly configured on backend
   - Verify API endpoints are accessible

2. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for syntax errors in components
   - Verify all imports are correct

3. **Hot Reload Not Working**
   - Check if Vite dev server is running
   - Clear browser cache
   - Restart the development server

4. **API Calls Failing**
   - Verify backend server is running
   - Check network tab for error details
   - Ensure API endpoints match backend routes

## 📝 TODO

- [ ] Implement EditBook component functionality
- [ ] Add book deletion feature
- [ ] Implement search and filtering
- [ ] Add pagination for large book lists
- [ ] Improve error handling and user feedback
- [ ] Add loading states and skeletons
- [ ] Implement responsive design improvements
- [ ] Add unit tests
- [ ] Add integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For issues and questions related to the frontend, please open an issue in the repository.
