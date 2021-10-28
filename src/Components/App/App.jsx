import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Container } from 'Components/Container';
import { Searchbar } from 'Components/Searchbar';
import { ImageGallery } from 'Components/ImageGallery';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = searchQuery => setSearchQuery(searchQuery);

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery searchQuery={searchQuery} />
      <Toaster />
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleFormSubmit = searchQuery => {
//     this.setState({ searchQuery });
//   };

//   render() {
//     const { searchQuery } = this.state;

//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery searchQuery={searchQuery} />
//         <Toaster />
//       </Container>
//     );
//   }
// }
