/*
 * Copyright (c) 2017 ThoughtWorks, Inc.
 *
 * Pixelated is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pixelated is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pixelated. If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import { translate } from 'react-i18next';
import LinkButton from 'src/common/link_button/link_button';

export const BackupAccountStep = ({ t }) => (
  <div className='account-recovery-form backup-account'>
    <img
      className='account-recovery-progress'
      src='/public/images/account-recovery/step_4.svg'
      alt={t('account-recovery.backup-account-step.image-description')}
    />
    <h1>{t('account-recovery.backup-account-step.title')}</h1>
    <LinkButton
      buttonText={t('account-recovery.backup-account-step.buttonText')}
      href='/backup-account'
    />
  </div>
);

BackupAccountStep.propTypes = {
  t: React.PropTypes.func.isRequired
};

export default translate('', { wait: true })(BackupAccountStep);
