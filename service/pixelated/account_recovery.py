#
# Copyright (c) 2017 ThoughtWorks, Inc.
#
# Pixelated is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Pixelated is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with Pixelated. If not, see <http://www.gnu.org/licenses/>.
from twisted.internet.defer import inlineCallbacks, returnValue
from twisted.logger import Logger

log = Logger()


class AccountRecovery(object):
    def __init__(self, session):
        self._session = session

    @inlineCallbacks
    def update_recovery_code(self, recovery_code):
        try:
            response = yield self._session.update_recovery_code(recovery_code)
            returnValue(response)
        except Exception as e:
            log.warn('Something went wrong when trying to save the recovery code')
            raise
