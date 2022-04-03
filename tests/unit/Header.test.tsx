import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


import { employees } from '../../server/data'

import { HeaderComponent } from '../../src/components/UsersManagement/components/Header/Header'


describe('<Header />', () => {

    it('Header test', () => {
      const logout = jest.fn()

      render(
        <HeaderComponent username='AI' handleLogout={logout} items={employees} />
      )

      const LogoutButton = screen.getByText('Logout AI')
      expect(LogoutButton).toBeDefined()

      const wrongEmailsCount = screen.getByText('4 Emails are wrong')
      expect(wrongEmailsCount).toBeDefined()

      userEvent.click(LogoutButton)
      expect(logout).toHaveBeenCalled()
      
    })


})
