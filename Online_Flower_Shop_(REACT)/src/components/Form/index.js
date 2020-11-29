import React from "react";
import './Form.scss';
import Button from "../Button";
import {Form, withFormik} from 'formik';
import MyInput from "./MyInput";
import {connect} from "react-redux";
import {doShoppingOperation} from '../../store/cartList/operations';
import schema from "./schema";


export const purchaseCreation = (values, {props}) => {
    const {cartList, doShopping} = props;
    console.log('Ваша покупка:');
    cartList.forEach((item, index) => console.log(`${index + 1}. ${item.title} -  ${item.quantity} шт.`));
    console.log('Ваши данные:');
    for(let key in values){
        console.log(`${key}: ${values[key]}`);
    }
    doShopping();
};


 const ShoppingForm = ({cartList, doShopping}, {isSubmitting}) => {

            return(
                <Form className='shopping-form' noValidate>
                        <MyInput type='text' placeholder='Имя' name='name'
                              label='Ваше имя'/>
                        <MyInput type='text' placeholder='Фамилия' name='surname'
                               label='Ваша фамилия' />
                        <MyInput type='text' placeholder='Возраст' name='age'
                               label='Ваш возраст' />
                        <MyInput type='text' placeholder='Адрес доставки' name='address'
                               label='Адрес доставки'  />
                        <MyInput type='text' placeholder='+380' name='phone'
                               label='Мобильный телефон' />
                    <div className='shopping-form-btn'>
                        <Button  backgroundColor='indianred' text='Подтвердить' className='btn--cart' type='submit'
                                 disabled={isSubmitting}/>
                    </div>
                    <p className="footnote"><span className='required'>*</span> - поле обязательное для заполнения </p>
                </Form>
            )
};

const mapStateToProps = ({cartList}) => ({cartList});

const mapDispatchToProps = (dispatch) => ({
    doShopping: () => dispatch(doShoppingOperation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({
        name: '',
        surname: '',
        age: '',
        address: '',
        phone: '+380'
    }),
    handleSubmit: purchaseCreation,
    validationSchema: schema
})(ShoppingForm));