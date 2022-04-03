import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

import FilterTab from '../../src/components/UsersManagement/components/Filter/components/FilterTab'


describe('<FilterTab />', () => {

    it('Tab test', () => {

      const props = {
        title: 'Wrong',
        count: 31,
        path: '/items/wrong'
      }

      render(
        <MemoryRouter>
          <FilterTab { ...props } />
        </MemoryRouter>
      )

      const titleAndCount = screen.getByText('Wrong (31)')
      expect(titleAndCount).toBeDefined()
    })
})

