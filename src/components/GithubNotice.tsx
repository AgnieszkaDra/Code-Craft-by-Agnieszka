import type { ReactElement } from 'react';
import { BaseLink } from '../ui';

interface GitHubNoticeProps {
  className?: string;
}

const GitHubNotice = ({ className }: GitHubNoticeProps): ReactElement => {
  return (
    <section className={`github-notice ${className ?? ''}`}>
      <div className='github-notice__container'>
        <p className="github-notice__text text-description">
          <span className="github-notice__highlight font-large">
            Szukasz projektu portfolio?&nbsp;
          </span>
            Kod źródłowy tej strony jest dostępny jako open source.&nbsp;
          <BaseLink
            href="https://github.com/AgnieszkaDra/Code-Craft-by-Agnieszka"
            external
            className="github-notice__link link--external link--github"
            ariaLabel="Zobacz na GitHub"
          >
            Zobacz na GitHub
          </BaseLink>
        </p>
      </div>  
    </section>
    );
};

export default GitHubNotice;