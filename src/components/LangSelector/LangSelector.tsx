import React from 'react'
import { Text, Button, Language, IconButton, ArrowDropDownIcon } from '@doodaswap/uikit'
import Dropdown from '../Dropdown/Dropdown'
import MenuButton from '../MenuButton'

interface Props {
  currentLang: string
  langs: Language[]
  setLang: (lang: Language) => void
  hideLanguage?: boolean
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    target={
      <Button variant="text" scale="sm">
        <Text>{currentLang.toUpperCase()}</Text>
        <IconButton variant="text" scale="sm" mr="8px">
          <ArrowDropDownIcon height={24} width={24} color="textSubtle" />
        </IconButton>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: '32px', height: 'auto' }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
)

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang)
