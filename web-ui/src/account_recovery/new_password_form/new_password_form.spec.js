import { shallow } from 'enzyme';
import expect from 'expect';
import React from 'react';
import { NewPasswordForm } from './new_password_form';

describe('NewPasswordForm', () => {
  let newPasswordForm;
  let mockPrevious;

  beforeEach(() => {
    const mockTranslations = key => key;
    mockPrevious = expect.createSpy();
    newPasswordForm = shallow(
      <NewPasswordForm t={mockTranslations} previous={mockPrevious} />
    );
  });

  it('renders title for new password form', () => {
    expect(newPasswordForm.find('h1').text()).toEqual('account-recovery.new-password-form.title');
  });

  it('renders input for new password', () => {
    expect(newPasswordForm.find('InputField').at(0).props().type).toEqual('password');
    expect(newPasswordForm.find('InputField').at(0).props().label).toEqual('account-recovery.new-password-form.input-label1');
  });

  it('renders input to confirm new password', () => {
    expect(newPasswordForm.find('InputField').at(1).props().type).toEqual('password');
    expect(newPasswordForm.find('InputField').at(1).props().label).toEqual('account-recovery.new-password-form.input-label2');
  });

  it('renders submit button', () => {
    expect(newPasswordForm.find('SubmitButton').props().buttonText).toEqual('account-recovery.button-next');
  });

  it('returns to previous step on link click', () => {
    newPasswordForm.find('BackLink').simulate('click');
    expect(mockPrevious).toHaveBeenCalled();
  });
});