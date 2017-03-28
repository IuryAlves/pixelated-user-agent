import { shallow } from 'enzyme';
import expect from 'expect';
import React from 'react';
import { UserRecoveryCodeForm } from 'src/account_recovery/forms/user_recovery_code_form';

describe('UserRecoveryCodeForm', () => {
  let userRecoveryCodeForm;

  beforeEach(() => {
    const mockTranslations = key => key;
    userRecoveryCodeForm = shallow(
      <UserRecoveryCodeForm t={mockTranslations} />
    );
  });

  it('renders title for user recovery code', () => {
    expect(userRecoveryCodeForm.find('h1').text()).toEqual('account-recovery.user-form.title');
  });

  it('renders description', () => {
    expect(userRecoveryCodeForm.find('p').text()).toEqual('account-recovery.user-form.description');
  });

  it('renders input for user code', () => {
    expect(userRecoveryCodeForm.find('InputField').props().label).toEqual('account-recovery.user-form.input-label');
  });

  it('renders submit button', () => {
    expect(userRecoveryCodeForm.find('SubmitButton').props().buttonText).toEqual('account-recovery.user-form.button');
  });
});
