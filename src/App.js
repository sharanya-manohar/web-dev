import React, { useState } from 'react';
import './App.css';
import VerticalNavbar from './components/verticalnavbar';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'Chicken Pizza', 
          price: 500, 
          image: 
'https://tasty.recipes/wp-content/uploads/2017/11/Chicken-Parm-Pizza-2000x2000.jpg'
        },
        { id: 2, 
          name: 'Chicken Soup', 
          price: 200, 
          image: 
'http://images.media-allrecipes.com/userphotos/960x960/3759155.jpg'
        },
        { id: 3, 
          name: 'Chicken Salad', 
          price: 200, 
          image: 
'https://life-in-the-lofthouse.com/wp-content/uploads/2015/05/BBQ_Chicken_Salad.jpg'
        },
        { id: 4, 
            name: 'Chicken BBQ', 
            price: 750, 
            image: 
'http://www.simplesweetsavory.com/wp-content/uploads/2015/04/Easy-Grilled-BBQ-Chicken.jpg'
        },
        { id: 5, 
            name: 'Chicken Burger', 
            price: 250, 
            image: 
'https://www.nrn.com/sites/nrn.com/files/traditional_chicken_burger_R_0.jpg'
        }
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
          
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
              <VerticalNavbar>
                <div className='bgimg-1'></div>
              </VerticalNavbar>
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>

        </div>
    );
}
 
export default App;
