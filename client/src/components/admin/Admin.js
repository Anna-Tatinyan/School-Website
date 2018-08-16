import React from 'react';
import "./admin.css"
import {
  Router,
  Route
} from 'react-router-dom';

import history from '../../history';
import {
  PrivateRoute
} from '../../routes/privateRoute';


import SideNav, {
  Nav,
  NavIcon,
  NavText
} from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {
  user
} from 'react-icons-kit/ikons/user';
import {
  book
} from 'react-icons-kit/oct/book';
import {
  university
} from 'react-icons-kit/ionicons/university'
import {
  home
} from 'react-icons-kit/iconic/home'
import studentsImg from "./adminStudent.jpg"


import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [{
    src: 'https://www.responsiveclassroom.org/wp-content/uploads/2016/06/Responsive-Classroom-Course-for-Elementary-Educators.jpg',
    width: 5,
    height: 4
  },
  {
    src: 'https://www.tum.de/typo3temp/_processed_/csm_171121_PISA_74cc9ff459.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'https://www.shu.ac.uk/~/media/home/current-students/graduation/images/events-graduation-122-november-2014.jpg?la=en&hash=970F34E12806410B690095F9E9413997AC80312E',
    width: 2,
    height: 2
  },
  {
    src: 'https://www.asdubai.org/uploaded/Learning/Libraries/ASD_Middle_School-2112.jpg',
    width: 3,
    height: 2
  },
  {
    src: 'http://smapse.com/storage/2017/07/converted/885_0_british-schools-for-girls.jpg',
    width: 4,
    height: 3
  },
  {
    src: ' https://chiefessays.net/wp-content/uploads/2017/11/769.jpg',
    width: 3,
    height: 3
  },
  {
    src: 'https://cdn.harper-adams.ac.uk/image/news/large/170706-460371.jpg',
    width: 2,
    height: 1
  },
  {
    src: 'https://www.melbournechildpsychology.com.au/wp-content/uploads/2013/11/kids-group-learning.jpg',
    width: 4,
    height: 3
  }
];


class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const styles = {
      width: '180px',
      height: '100%',
      background: '#2c3e50',
      color: '#FFF',
      position: 'fixed',
    };

    return ( <
      div className = "main" >
      <
      div className = "header" >
      <
      h1 className = "head" > Welcome to your School Website < /h1>

      <
      div >
      <
      Gallery photos = {
        photos
      }
      onClick = {
        this.openLightbox
      }
      /> <
      Lightbox images = {
        photos
      }
      onClose = {
        this.closeLightbox
      }
      onClickPrev = {
        this.gotoPrevious
      }
      onClickNext = {
        this.gotoNext
      }
      currentImage = {
        this.state.currentImage
      }
      isOpen = {
        this.state.lightboxIsOpen
      }
      /> <
      /div> <
      /div>

      <
      /div>
    )
  }
}

export default Admin;
