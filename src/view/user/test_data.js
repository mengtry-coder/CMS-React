import React, {useState, useCallback, useEffect} from 'react'
import * as actionUser from "../../controller/user_controller";
import { Card } from 'antd';
import { useDispatch, useSelector, Provider } from "react-redux";
import Items from '../../components/user_item'
const TestData = () => {
    //start intergratefirebase
    const [isloading, setIsLoading] = useState(false);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const fetchUserFromFirebase = useCallback(async () => {
    try {
        await dispatch(actionUser.setUser());
    } catch (e) {
        console.log(e);
    }
    }, [dispatch]);
    useEffect(() => {
    setIsLoading(true);
    fetchUserFromFirebase().then(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    });
    }, [fetchUserFromFirebase]);
    if (isloading) {
    return (
        <div className='App'>
            empty
        </div>

    );
    }
    return (
        <div className='test_data'>
          <Card>
              <Provider>
            {user.map((d, index) => {
              return (
                <Items key={index} id={d.id} name={d.name} />
              );
            })}
            </Provider>
          </Card>
        </div>
      );
}
//intergrade firebase

export default TestData
