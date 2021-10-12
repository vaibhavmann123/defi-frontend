import React from 'react'
import { Flex, IconButton, CogIcon, useModal, Box } from '@doodaswap/uikit'
import SettingsModal from './SettingsModal'

import { languageList } from '../../../config/localization/languages'
import { useTranslation } from '../../../contexts/Localization'
import LangSelector from '../../LangSelector/LangSelector'

const GlobalSettings = () => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <Flex mt="4px">
        <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} hideLanguage />
      </Flex>
      <Flex>
        <IconButton
          onClick={onPresentSettingsModal}
          variant="text"
          scale="sm"
          mr="8px"
          id="open-settings-dialog-button"
        >
          <CogIcon height={24} width={24} color="textSubtle" />
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default GlobalSettings
