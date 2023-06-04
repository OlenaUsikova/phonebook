import React from "react";
import {StyledInput} from '../addForm/AddForm.styled'
import { setFilter } from "Redux/Contacts/contactsSlice";
import { useDispatch } from "react-redux";
import { StyledForm, StyledTitle } from "./FindContact.styled";

export const FindContactForm = () => {
  const dispatch = useDispatch();
  
const onChangeFind = ev => {
  dispatch(setFilter(ev.currentTarget.value.toLowerCase()));
};
    return (
        <StyledForm>
        <StyledTitle>Find contacts by name</StyledTitle>
        <StyledInput type = "text"
          onChange={onChangeFind}/>
        </StyledForm>
    )
}

